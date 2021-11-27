const s3 = require('s3-client')
const config = require('../../config')
const s3ClientParams = {
  maxAsyncS3: 20,
  s3RetryCount: 3,
  s3RetryDelay: 1000,
  multipartUploadThreshold: 20971520,
  multipartUploadSize: 15728640,
  s3Options: {
    accessKeyId: config.digitalOcean.spaces.key,
    secretAccessKey: config.digitalOcean.spaces.secret,
    region: 'sfo2',
    endpoint: 'sfo2.digitaloceanspaces.com',
    sslEnabled: true
  }
}

module.exports = {
  uploadFile (s3Params) {
    const client = s3.createClient(s3ClientParams)
    return promise = new Promise((resolve, reject) => {
      const uploader = client.uploadFile(s3Params)
      uploader.on('error', (e) => reject(e))
      uploader.on('end', resolve)
    })
  },

  delete (params) {
    const client = s3.createClient(s3ClientParams)
    client.deleteObjects({s3Params: params})
  },

  getFile (s3Params, localFile) {
    const client = s3.createClient(s3ClientParams)
    return promise = new Promise((resolve, reject) => {
      const downloader = client.downloadFile({localFile, s3Params})
      downloader.on('error', function(err) {
        reject(err.stack)
      })
      downloader.on('end', function() {
        resolve(localFile)
      })
    })
  }
}