const express = requrie('express')
const app = express()


app.use(express.json())

app.listen(3001, ()=>{
    console.log('Server running in port 3001...')
})