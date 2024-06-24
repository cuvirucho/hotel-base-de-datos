const request = require('supertest');
const app = require('../app.js');
const User = require('../modelos/User.js');
 let id
 let token

//podt
test("POST /user ", async () => {
    const nuevouser = {
        firstName: "Sam",
        lastName: "Pedro",
        password: "111111",
        gender: "UNDEFINE",
        email: "Smart@hotmail.com"
    }
    const res = await request(app).post("/users").send(newProduct);
		id = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();

})


//logi
test( 'POST / users/ login debe loggear al usuario', async ( ) => {
    const credentials ={
         email: 'Smart@hotmail.com ',
    password: ' test1234 '
    }
   
    const res= await request(app).post('/users/login'). send(credentials);
  
    token = res.body.token;
    expect( res.status).toBe(200) ;
    expect ( res.body.token) .toBeDefined();
    expect (res. body. user. email).toBe( credentials.email) });








//get
test("GET /user", async() => {
    const res = (await request(app).get("/users")).set("Aurisacion",`Bearer ${token}`);
		expect(res.status).toBe(200);
 
})


//get uno 
test("GET /use uno", async() => {
    const userp = await User.findOne({ where: { firstName:"sam" } });
    const res = await request(app).get(`/users/${userp.id}`);
    expect(res.status).toBe(200);
})
//borar
test("DELETE /user ", async () => {
    const userp = await User.findOne({ where: {firstName: "sam"} });
const res = await request(app).delete(`/users/${userp.id}`).set("Aurisacion",`Bearer ${token}`);
expect(res.status).toBe(204);
});
//actualisxr
test("PUT /user", async () => {
    const userp = await User.findOne({ where: {firstName: "sam"} });
const updatedProduct = {
    firstName: "igor",
}
const res = await request(app)
            .put(`/users/${userp.id}`).set("Aurisacion",`Bearer ${token}`)
            .send(updatedProduct);
    expect(res.status).toBe(200);
})
