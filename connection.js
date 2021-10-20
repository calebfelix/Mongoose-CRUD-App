const mongoose = require("mongoose");
const URL = "mongodb+srv://pg_user:mypguser@rest.nromd.mongodb.net/CRUD_APP?retryWrites=true&w=majority"


const ModelSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true,
    },
    Completed: {
        type: Boolean,
        required: true,
    },
});

const task = mongoose.model("Task", ModelSchema);


const Task = new task({
    Description: "Water the plants",
    Completed: false
});



async function Create() {

    try {
        mongoose.connect(URL).then(() => {
            console.log("db connected");
        });


        await Task.save();
        console.log("Task added");

    } catch (error) {
        console.log(error);

    } finally {
        mongoose.connection.close().then(console.log("Connection Closed"));
    }

}



async function Update() {

    try {
        mongoose.connect(URL).then(() => {
            console.log("db connected");
        });

        const filter = { Description: 'Go to school' };
        const update = { Completed: false };
        await task.findOneAndUpdate(filter, update, { new: true });
        console.log("Task Updated");

    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close().then(console.log("Connection Closed"));
    }
}



async function Delete() {

    try {
        mongoose.connect(URL).then(() => {
            console.log("db connected");
        });


        await task.deleteOne({ _id: "613e0d606aa9111e6b635f37" });
        console.log("DOC DELETED");


    } catch (error) {
        console.log("NHK?");
    } finally {
        mongoose.connection.close().then(() => {
            console.log("Connection Closed");
        })
    }
}





async function Read() {
    try {
        mongoose.connect(URL).then(() => {
            console.log("db connected");
        });



        const OUT = await task.find({ Completed: false })
        console.log(OUT);





    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close().then(() => {
            console.log("Connection Closed");
        })
    }
}

// ------------------------uncomment each function as per will---------------------------

// Create();
Read();
//Update();
//Delete();