const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  //fetches roles
  const fetchRoles= () => axios.get(`http://localhost:3000/api/getopen`);

  // await for results
  const res = await fetchRoles();

  // map into these results and create nodes
  res.data.map(role => {
    // Create your node object
    const roleNode = {
      // Required fields
      id: `${role.id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Role`, // name of the graphQL query --> allRole{}
        // required
      },
      children: [],

      // Other fields can be added that needed to query with graphQl
      description: role.fields
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(roleNode))
      .digest(`hex`);
    // add it to roleNode
    roleNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(roleNode);
  });

  return;
}
