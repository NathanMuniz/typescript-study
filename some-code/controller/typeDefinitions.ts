// Request object defnitions
export interface ProductSaveRequest {
  id?: string;
  count: number;
  lookupCode: string;
}

// EndResponse data object defintions 

// Api RESPONSE DATA 
export interface ApiResponse {
  errorMessage?: string;
}

export interface ProductSaveResponse extends ApiResponse {
  product: Product
}

// End API response data 
// End response object definitions 

export interface CommandResponse<T> {
  data?: T;
  status: number;
  message?: string;
}


