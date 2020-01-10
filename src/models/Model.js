/*-----------------------------------------------------------------
- User model
-----------------------------------------------------------------*/
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

class Model {
    
    /**
     * @inheritDoc
     */
    constructor(model, schema) {
        this.generatedSchema = new mongoose.Schema(schema);
        this.generatedSchema.plugin(mongoosePaginate);
        this.model = mongoose.model(model, this.generatedSchema);
    }
    
    model() {
        return this.model;
    }
    
}

module.exports = new Model('User', {
    first_name: {
        type    : String,
        required: true,
    },
    last_name : {
        type    : String,
        required: true,
    }
}).model();
