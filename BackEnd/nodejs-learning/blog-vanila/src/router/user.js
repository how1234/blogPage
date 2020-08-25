const handleUserRouter = (req,res) => {
  const method = req.method
  const path = req.path
  
  if(method === 'GET' && path === '/api/user/login'){
    return {
      msg:"You can create a user"
    }
  }

}

module.exports = handleUserRouter