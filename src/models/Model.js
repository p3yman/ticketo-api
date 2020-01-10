/*-----------------------------------------------------------------
- Model class
-----------------------------------------------------------------*/
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');

class Model {
    
    /**
     * @inheritDoc
     */
    constructor(model, schema, options) {
        // CREATE SCHEMA
        this.generatedSchema = new mongoose.Schema(schema, {
            timestamps: true,
        });
        
        // REGISTER PAGINATE
        this.generatedSchema.plugin(mongoosePaginate);
        this.generatedSchema.plugin(mongooseDelete, { deletedAt : true });
        
        // CREATE MODEL
        this.model = mongoose.model(model, this.generatedSchema);
        
        // RETURN MODEL
        return this.model;
    }
    
}

module.exports = Model;

