/*-----------------------------------------------------------------
- Model class
-----------------------------------------------------------------*/
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

class Model {
    
    /**
     * @inheritDoc
     */
    constructor(model, schema) {
        // CREATE SCHEMA
        this.generatedSchema = new mongoose.Schema(schema);
        
        // REGISTER PAGINATE
        this.generatedSchema.plugin(mongoosePaginate);
        
        // CREATE MODEL
        this.model = mongoose.model(model, this.generatedSchema);
        
        // RETURN MODEL
        return this.model;
    }
    
}

module.exports = Model;
