import { Router } from "express";
import {
    bulkDeleteTransactionController,
    bulkTransactionController,
    createTransactionController,
    deleteTransactionController,
    duplicateTransactionController,
    getAllTransactionController,
    getTransactionByIdController,
    scanReceiptController,
    updateTransactionController
} from "../controllers/transaction.controller";
import { upload } from "../config/cloudinary.config";



const transactionRoutes = Router();

transactionRoutes.get("/:id", getTransactionByIdController);
transactionRoutes.get("/all", getAllTransactionController);

transactionRoutes.put("/duplicate/:id", duplicateTransactionController);
transactionRoutes.put("/update/:id", updateTransactionController);

transactionRoutes.post("/create", createTransactionController);
transactionRoutes.post("/bulk-transaction", bulkTransactionController);
transactionRoutes.post("/scan-receipt",upload.single("receipt"),scanReceiptController);

transactionRoutes.delete("/delete/:id", deleteTransactionController);
transactionRoutes.delete("/bulk-delete", bulkDeleteTransactionController);



export default transactionRoutes;