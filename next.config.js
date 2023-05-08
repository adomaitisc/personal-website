module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/simplelist",
        destination: `https://simple-list-six.vercel.app/`,
      },
    ];
  },
};
