import IAppointments from "../interfaces/IAppointment";

const appointments: IAppointments[] = [];
let appointmentId: number = 1;

export const getAppointmentsService = async (): Promise<IAppointments[]> => {
  const allAppointments: IAppointments[] = appointments; //aqui es llamada de base de dato futuro
  return allAppointments;
};

export const getAppointmentByIdService = async (
  id: number
): Promise<IAppointments> => {
  const foundAppointment: IAppointments | undefined = appointments.find(
    (appointment) => appointment.id === id
  );
  if (!foundAppointment) {
    throw new Error("Appointment not found");
  }
  return foundAppointment;
};

export const createAppointmentService = async (
  params: Omit<IAppointments, "id">
): Promise<IAppointments> => {
  if (!params.userId) {
    throw new Error("User ID is required to create an appointment");
  }

  const newAppointment: IAppointments = {
    id: appointmentId++,
    date: params.date,
    time: params.time,
    userId: params.userId,
    status: params.status || "active",
  };

  appointments.push(newAppointment);

  return newAppointment;
};

export const cancelAppointmentService = async (
  id: number
): Promise<IAppointments> => {
  const appointmentIndex = appointments.findIndex(
    (appointment) => appointment.id === id
  );
  if (appointmentIndex === -1) {
    throw new Error("Appointment not found");
  }

  appointments[appointmentIndex].status = "cancelled";

  return appointments[appointmentIndex];
};
