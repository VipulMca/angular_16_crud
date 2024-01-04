export interface CreditCard {
    id: number;
    name: string;
    description:string;
    bankName:string;
    maxCredit: number;
    interestRate: number;
    active: boolean;
    recommendedScore: string;
    termAndCondition: string,
    annualFee: number;
    createdDate: string;
    updatedDate: string;
}
