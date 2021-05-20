export const DATA_FETCH_LOADING = "DATA_FETCH_LOADING";
export const DATA_FETCH_FAILED = "DATA_FETCH_FAILED";
export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";

export interface dataFetchDetailsI {
  id: number;
  employee_name: string;
  employee_age: string;
  employee_salary: string;
}

export interface dataLoading {
  type: typeof DATA_FETCH_LOADING;
}
export interface dataFailed {
  type: typeof DATA_FETCH_FAILED;
  payload: string;
}
export interface dataSuccess {
  type: typeof DATA_FETCH_SUCCESS;
  payload: dataFetchDetailsI;
}

export type DataFetchTypes = dataLoading | dataFailed | dataSuccess;
