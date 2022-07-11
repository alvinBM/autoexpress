import express from "express";
import commandCtrl from "../controllers/commandController";

const router = express.Router();

router.get("/", commandCtrl.getCommands);
router.get("/byStatus/:status", commandCtrl.getCommandByStatus);
router.put("/:id", commandCtrl.updateStatusCommand);
router.get("/:id", commandCtrl.getCommande);
router.get("/user/:id", commandCtrl.getCommandeByUser);
router.post("/", commandCtrl.createCommande);
router.post("/create/", commandCtrl.create);
// router.post("/v2/", commandCtrl.createCommande);

export default router;

// export const commandModel = [
//   {
//     amount: 45, // $ 45 total of all panier
//     user: 8,
//     created: "07/02/2022",
//     status: "PAYED",
//     panier: [
//       {
//         nameProduct: "NameOfproduit_1",
//         product: 1, // id of product
//         options: "OPTION_1",
//         quantity: 5,
//         priceUnit: 2,
//         total: 10 //
//       }
//     ]
//   }
// ];

/*   "panier":"[   
      {
        "quantity":3,
        "priceUnit":33,
        "total":33,
        "options":"Ok", 
        "product":1,
        "nameProduct":"TOYOTA"    
      }
    ]"
 */
