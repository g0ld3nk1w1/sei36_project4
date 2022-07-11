import mongoose, { Schema } from "mongoose";

const eClassSchema = new Schema({
    name: {type: String, required:true},
    images: [String],
    min: Number,
    max: Number,
    enrollment: [{
        user_id: Number,
        inputName: String,
    }],
    waitingList: [{
        user_id: Number,
        inputName: String,
    }],
    instructor: Number,
    materials: [{type: Schema.Types.ObjectId, ref: 'Product', default:[]}],
    cost: {type: mongoose.Types.Decimal128, default: 0.0},
    isActive: Boolean,
    isDisplayed: Boolean,
    duration: Number,
    durationUnit: {enum: ["Hours", "Days", "Minutes"]},
    classDates: [{
        startDate: Date,
        endDate: Date,
        repeat: String,
        status: {enum: ["Confirmed", "Canceled", "At Maximum", "Pending Minimum"]}
    }],
    registrationDate: Date,
    closingDate: Date,
    conditions: String,
    description: String
},{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

eClassSchema.virtual('enrollmentNum').get(function () {return this.enrollment.length});
eClassSchema.virtual('waitingNum').get(function () {return this.waitingList.length});
eClassSchema.virtual('hasReachedMin').get(function () {return this.min ? this.enrollment.length > this.min : "Minimum Capacity not defined"});
eClassSchema.virtual('hasReachedMax').get(function () {return this.max ? this.enrollment.length === this.max : "Maximum Capacity not defined"});

const Eclass = mongoose.model("Eclass", eClassSchema);
// module.exports = Eclass;
export default Eclass;