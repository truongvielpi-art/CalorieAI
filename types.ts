export interface Meal {
  id: string;
  name: string;
  time: string;
  calories: number;
  image: string;
  type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
}

export interface MacroData {
  name: string;
  value: number;
  unit: string;
  color: string;
  percent: number;
  icon: string;
}

export interface ScanResult {
  imageUrl: string;
  foodName: string;
  calories: number;
  healthScore: number;
  macros: {
    carbs: number;
    protein: number;
    fat: number;
  };
  tags: string[];
}
