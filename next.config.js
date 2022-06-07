module.exports = {
	reactStrictMode: true,
  	async redirects() {
    	return [
        	{
          		source: '/epk',
          		destination: '/behind.jpg',
          		permanent: true,
        	},
      	]
    }
}
