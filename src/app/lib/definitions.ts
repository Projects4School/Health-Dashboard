export type User = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export type Patient = {
    id: string;
    gender: number;
    firstname: string;
    lastname: string;
    email: string;
    image_url: string;
};

export type PatientField = {
    gender: number;
    firstname: string;
    lastname: string;
    email: string;
    image_url: string;
};

export type PatientForm = {
    id: string;
    gender: number;
    firstname: string;
    lastname: string;
    email: string;
};