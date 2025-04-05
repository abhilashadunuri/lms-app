import { Document, Model, Schema, model } from "mongoose";

interface ILicense extends Document {
    licenseName: string;
    licenseType: string;
    manufacturer: string;
    modalType: string;
    totalSeats: number;
    purchaseDate: Date;
    expirationDate: Date;
    shelfLife: string;
    departmentOwner: string;
    departmentName: string;
    employeeName: string[];
    billingEmail: string;
    costPerSeat: number;
    totalCost: string;
    subscriptionType: string;
    subscriptionModel: string;
    renewalDetails: {
        lastRenewedDate: Date;
        renewalHistory: Date[];
        renewalCosts: string[];
    };
    licenseStatus: string;
    createdAt: Date;
    updatedAt: Date;
}

const LicenseSchema = new Schema<ILicense>({
    licenseName: {
        type: String
    },
    licenseType: {
        type: String
    },
    manufacturer: {
        type: String
    },
    modalType: {
        type: String
    },
    totalSeats: {
        type: Number
    },
    purchaseDate: {
        type: Date
    },
    expirationDate: {
        type: Date
    },
    shelfLife: {
        type: String
    },
    departmentOwner: {
        type: String
    },
    departmentName: {
        type: String
    },
    employeeName: [{
        type: String
    }],
    billingEmail: {
        type: String
    },
    costPerSeat: {
        type: Number
    },
    totalCost: {
        type: String
    },
    subscriptionType: {
        type: String
    },
    subscriptionModel: {
        type: String
    },
    renewalDetails: {
        lastRenewedDate: {
            type: Date
        },
        renewalHistory: [{
            type: Date
        }],
        renewalCosts: [{
            type: String
        }],
    },
    licenseStatus: {
        type: String
    },
}, { timestamps: true });

const LicenseModel: Model<ILicense> = model<ILicense>('License', LicenseSchema);
export default LicenseModel;
