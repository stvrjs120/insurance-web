import { Covering } from './enums/covering.enum';
import { RiskLevel } from './enums/risk-level.enum';

export class Insurance {
    Id: number;
    Name: string;
    Description: string;
    Covering: Covering;
    ValidFrom: Date;
    CoverageTime: number;
    Price: number;
    RiskLevel: RiskLevel;
}
