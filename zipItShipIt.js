const {zipFunctions} = require("@netlify/zip-it-and-ship-it");

const zipNetlifyFunctions = async function () {
  const archive = await zipFunctions("src", "dist", {
    archiveFormat: "zip",
    config: {
      nodeVersion: "14.x",
      // externalNodeModules: [".prisma/client/index.d.ts", "nexus-plugin-prisma", "express", "@prisma/client", "nexus", "graphql"],
      nodeBundler: "esbuild"
    }
  });

  return archive;
};

zipNetlifyFunctions().then(() => process.exit(0));
