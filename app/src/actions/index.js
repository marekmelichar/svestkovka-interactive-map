/*
 * action types
 */

// INPUTS
export const NUMBER_OF_ROOMS = 'NUMBER_OF_ROOMS';
export const AVERAGE_OCCUPANCY_OF_ROOMS = 'AVERAGE_CAPACITY_OF_ROOMS';
export const AMOUNT_OF_MEETINGS_DAILY = 'AMOUNT_OF_MEETINGS_DAILY';
export const PRICE_OF_RENT = 'PRICE_OF_RENT';
export const TOTAL_SQUARE_METERS = 'TOTAL_SQUARE_METERS';
export const AVERAGE_SALARY = 'AVERAGE_SALARY';

// OUTPUTS
export const RETURN_OF_INVESTMENT = 'RETURN_OF_INVESTMENT';
export const BETTER_ORGANIZED_MEETINGS = 'BETTER_ORGANIZED_MEETINGS';
export const INCREASED_CAPACITY = 'INCREASED_CAPACITY';
export const SAVINGS = 'SAVINGS';

// NEW FIELDS
export const AVG_EMPLOYEE_MONTHLY_RATE = 'AVG_EMPLOYEE_MONTHLY_RATE';
export const AVG_ROOM_SQM = 'AVG_ROOM_SQM';


export const C3 = (number) => {
  return {
    type: NUMBER_OF_ROOMS,
    number
  };
};

export const C5 = (number) => {
  return {
    type: AVERAGE_OCCUPANCY_OF_ROOMS,
    number
  };
};

export const C8 = (number) => {
  return {
    type: AMOUNT_OF_MEETINGS_DAILY,
    number
  };
};

export const C6 = (number) => {
  return {
    type: PRICE_OF_RENT,
    number
  };
};

export const C4 = (number) => {
  return {
    type: TOTAL_SQUARE_METERS,
    number
  };
};

export const C7 = (number) => {
  return {
    type: AVERAGE_SALARY,
    number
  };
};

export const avg_employee_monthly_rate = (number) => {
  return {
    type: AVG_EMPLOYEE_MONTHLY_RATE,
    number
  };
};

export const avg_room_sqm = (number) => {
  return {
    type: AVG_ROOM_SQM,
    number
  };
};

//
// export const returnOfInvestment = (number) => {
//   return {
//     type: RETURN_OF_INVESTMENT,
//     number
//   };
// };
//
// export const betterOrganizedMeetingsSavings = (number) => {
//   return {
//     type: BETTER_ORGANIZED_MEETINGS,
//     number
//   };
// };
//
// export const increasedCapacity = (number) => {
//   return {
//     type: INCREASED_CAPACITY,
//     number
//   };
// };
//
// export const savings = (number) => {
//   return {
//     type: SAVINGS,
//     number
//   };
// };
