import { Request, Response } from "express";

export const getAppointments = (req: Request, res: Response) => {
  res.send("get the list of all appointments");
};

export const getAppointmentByID = (req: Request, res: Response) => {
  res.send(`getting the details of the shift with ID: ${req.params.id}`);
};

export const createAppointment = (req: Request, res: Response) => {
  res.send("creating a new appointment");
};

export const scheduleAppointment = (req: Request, res: Response) => {
  res.send("scheduling an appointment by changing the status to scheduled");
};

export const cancelAppointment = (req: Request, res: Response) => {
  res.send("cancelling a shift by changing the status to cancelled");
};
