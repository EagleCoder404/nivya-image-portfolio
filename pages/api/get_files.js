const getBackendConnection = require("./_utils/backend.js")

module.exports = async (req, res) => {
    const supabase = getBackendConnection()
    const { data, error } = await supabase.storage.from('images').list()
    res.json(data);
}