export interface FormData {
  name: string;
  selfPhoneNumber: string;
  phoneNumber: string;
  companyName: string;
  gender: string;
  email: string;
  message: string;
  [key: string]: string;
}

export interface TextInputProps {
  inputItem: {
    id: string;
    label: string;
    placeholder?: string;
    type: string;
    status?: string;
  };
  value: string;
  onChange: (value: string) => void;
  error: Partial<FormData>;
  checkValidation: number;
}

export interface DocList {
  href: string;
  items: { name: string; id: string }[];
}

export interface TableList {
  href: string;
  items: { name: string; id: string }[];
}

export interface RowsData {
  cells: { column: string; value: any }[];
}
