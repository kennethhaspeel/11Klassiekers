import { format, parse, parseISO } from "date-fns";

export const DatumVoorbij = (datum:string) => {
    const dat = new Date(datum);
    const vandaag = new Date();
    return dat < vandaag ? true : false;
  };

  export const DateToDDMMYYYY = (datum:Date, metTijd = false) => { 
    //const d = toZonedTime(datum,"Europe/Brussels")
    return metTijd ? format(datum,"dd/MM/yyyy HH:mm"): format(datum, "dd/MM/yyyy");
  };