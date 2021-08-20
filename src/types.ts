export interface IError {
  message: string;
  status: number;
  code?: number;
  errors?: any;
  stack?: any;
  details?: any;
}
