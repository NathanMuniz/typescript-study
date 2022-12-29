import { Schema } from "mongoose";

export const StringType = {
  required: true,
  type: string
}

export const CreatedAtType = {
  type: Data,
  default: Data.now
}

export const StatusType = {
  type: string,
  enum: ["WAITTTING", "IN_PRODUCTION", "DONE"],
  default: : w
}



