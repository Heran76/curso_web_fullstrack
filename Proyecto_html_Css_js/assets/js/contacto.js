window.addEventListener("load", () => {
    const validation = new JustValidate(".main__contact");
    let isValidate = false;

    validation
     .addField("#name", [  
     {
        rule: "required",
        errorMessage: "El nombre es obligatorio"
     },
     {
        rule: "minLength",  
        value: 3,
        errorMessage: "El nombre es muy corto"
     },
     {
        rule: "maxLength",  
        value: 15,
        errorMessage: "El nombre es demasiado largo"
     }
     
     ])
     .addField("#surname", [  
     {
        rule: "required",
        errorMessage: "Los apellidos son obligatorios"
     },
     {
        rule: "minLength",  
        value: 3,
        errorMessage: "Los apellidos son muy cortos"
     },
     {
        rule: "maxLength",  
        value: 15,
        errorMessage: "Los apellidos son demasiado largos"
     }
     
     ])
     .addField("#email", [  
     {
        rule: "required",
        errorMessage: "El correo es obligatorio"
     },
     {
        rule: "email",
        errorMessage: "El correo no es válido"
     }
     
     ]);
});