export interface UserStage {
    stage: "New" | "Telephone Interview" | "Interview" | "Assessment" | "Pending approval"
    id: number
}

// new => جدید
// Telephone interview => مصاحبه تلفنی
// interview => مصاحبه
// Assessment => ارزیابی
// Pending approval => در انتظار تایید پیشنهاد