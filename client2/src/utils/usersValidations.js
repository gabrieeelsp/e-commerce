const validations =  {
    name: (name, method) => {
        if (!name) return 'El nombre no puede quedar vacío'
    
        return null;
    },

    email: (email, method) => {
        if (!email) return 'El email no puede quedar vacío'
    
        return null;
    },

    password: (password, method) => {
        if (!password) return 'El password no puede quedar vacío'
    
        return null;
    }
    
}

export default validations;