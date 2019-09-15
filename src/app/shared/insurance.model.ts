import { Covering } from './enums/covering.enum';
import { RiskLevel } from './enums/risk-level.enum';

export class Insurance {
    id: number;
    name: string;
    description: string;
    covering: Covering;
    validFrom: Date;
    coverageTime: number;
    price: number;
    riskLevel: RiskLevel;
}
