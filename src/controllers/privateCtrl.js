const data = {};
export const addSeed = async (req, res) => {
 try {
  return res.created({ message: 'Got Categories', data });
 } catch (err) {
  res.error(err.message);
 }
};
