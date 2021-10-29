function getBackendConnection() {
    const { createClient } = require('@supabase/supabase-js')
    const url = "https://foiizfofxaqqnnqfsgbn.supabase.co"
    const secret = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM1MTY5ODMzLCJleHAiOjE5NTA3NDU4MzN9.ZeZMystaiPNMBcPbwxff-0Wf1y6HjwSMp8SVl3FoRqM"
    const supabase = createClient(url, secret)
    return supabase
}

module.exports = getBackendConnection