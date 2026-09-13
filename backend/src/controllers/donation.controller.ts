import { Request, Response } from 'express';

export const getDonationConfig = (req: Request, res: Response) => {
  res.status(200).json({
    upiId: "9907987482@ybl",
    payeeName: "Arachno World",
    currency: "INR",
    qrImagePath: "/assets/qr-code.png"
  });
};
