// Mock User Data
export const mockUser = {
    id: 'USR-2025-001',
    fullName: 'สมชาย ใจดี',
    email: 'somchai@example.com',
    phone: '+66812345678',
    idCard: '1234567890123',
    address: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
    subscriptionTier: 'standard', // basic | standard | premium
    memberSince: '2024-01-15',
};

// Mock Land Records
export const mockLands = [
    {
        id: 'LND-2025-001234',
        ownerId: 'USR-2025-001',
        deedType: 'โฉนด',
        deedNumber: '12345',
        province: 'นนทบุรี',
        district: 'ปากเกร็ด',
        subdistrict: 'บางตลาด',
        landSizeRai: 2,
        landSizeNgan: 1,
        landSizeWa: 5050,
        coordinates: { lat: 13.9147, lng: 100.5035 },
        acquisitionDate: '2020-05-10',
        acquisitionMethod: 'ซื้อ',
        estimatedValue: 8000000,
        currentUse: 'ว่างเปล่า',
        hasAlert: true,
        lastInspection: '2024-02-15',
        riskLevel: 'high',
    },
    {
        id: 'LND-2025-001235',
        ownerId: 'USR-2025-001',
        deedType: 'โฉนด',
        deedNumber: '67890',
        province: 'ปทุมธานี',
        district: 'ลำลูกกา',
        subdistrict: 'คูคต',
        landSizeRai: 1,
        landSizeNgan: 0,
        landSizeWa: 0,
        coordinates: { lat: 13.9736, lng: 100.6528 },
        acquisitionDate: '2022-03-20',
        acquisitionMethod: 'รับมรดก',
        estimatedValue: 4000000,
        currentUse: 'เกษตรกรรม',
        hasAlert: false,
        lastInspection: '2024-11-20',
        riskLevel: 'low',
    },
    {
        id: 'LND-2025-001236',
        ownerId: 'USR-2025-001',
        deedType: 'น.ส.3ก',
        deedNumber: '54321',
        province: 'สุพรรณบุรี',
        district: 'เมือง',
        subdistrict: 'ท่าพี่เลี้ยง',
        landSizeRai: 5,
        landSizeNgan: 0,
        landSizeWa: 0,
        coordinates: { lat: 14.4746, lng: 100.1176 },
        acquisitionDate: '2018-08-15',
        acquisitionMethod: 'ซื้อ',
        estimatedValue: 3000000,
        currentUse: 'เกษตรกรรม',
        hasAlert: false,
        lastInspection: '2024-10-05',
        riskLevel: 'medium',
    },
];

// Mock Risk Assessments
export const mockRiskAssessments = [
    {
        assessmentId: 'RISK-2025-001',
        landId: 'LND-2025-001234',
        assessmentDate: '2024-12-20',
        overallRiskScore: 75,
        overallRiskLevel: 'high',
        riskBreakdown: {
            adversePossession: { score: 85, level: 'high' },
            encroachment: { score: 45, level: 'medium' },
            inheritanceDispute: { score: 60, level: 'medium' },
            rightOfWay: { score: 30, level: 'low' },
        },
        factors: [
            'ระยะห่างจากเจ้าของ > 100km',
            'ไม่มีการเข้าตรวจสอบในรอบ 12 เดือน',
            'พบการใช้พื้นที่ต่อเนื่อง 8 เดือน',
        ],
        recommendations: [
            {
                priority: 1,
                action: 'ติดป้ายประกาศเจ้าของที่ดินทันที',
                reason: 'ป้องกันการครอบครองโดยปรปักษ์',
                urgency: 'urgent',
                estimatedCost: 3000,
            },
            {
                priority: 2,
                action: 'จ้างผู้ดูแลที่ดินหรือเข้าตรวจสอบทุก 3 เดือน',
                reason: 'แสดงเจตนาครอบครองต่อเนื่อง',
                urgency: 'high',
            },
        ],
    },
];

// Mock Alerts
export const mockAlerts = [
    {
        alertId: 'ALT-2025-123456',
        landId: 'LND-2025-001234',
        timestamp: '2024-12-31T14:30:00+07:00',
        alertLevel: 'critical',
        alertType: 'UNAUTHORIZED_CONSTRUCTION',
        detectionMethod: 'SATELLITE_IMAGE_ANALYSIS',
        description: 'ตรวจพบการก่อสร้างโครงสร้างใหม่บนที่ดิน',
        location: {
            coordinates: { lat: 13.9147, lng: 100.5035 },
            affectedArea: 150,
            section: 'มุมทิศตะวันออกเฉียงเหนือของแปลงที่ดิน',
        },
        status: 'new',
        images: {
            baseline: '/images/baseline.jpg',
            current: '/images/current.jpg',
        },
        recommendedActions: [
            'ไปตรวจสอบที่ดินทันที',
            'ถ่ายภาพหลักฐานและบันทึกพิกัด GPS',
            'ติดต่อตำรวจท้องที่หากพบการบุกรุก',
        ],
    },
    {
        alertId: 'ALT-2025-123457',
        landId: 'LND-2025-001234',
        timestamp: '2024-12-25T10:15:00+07:00',
        alertLevel: 'medium',
        alertType: 'VEGETATION_CHANGE',
        detectionMethod: 'SATELLITE_IMAGE_ANALYSIS',
        description: 'พบการเปลี่ยนแปลงพืชพรรณในพื้นที่',
        location: {
            coordinates: { lat: 13.9145, lng: 100.5033 },
            affectedArea: 80,
            section: 'พื้นที่กลางแปลง',
        },
        status: 'acknowledged',
    },
];

// Mock Insurance Policies
export const mockInsurancePolicies = [
    {
        policyNumber: 'POL-2025-001234',
        landId: 'LND-2025-001234',
        planType: 'standard',
        annualPremium: 12000,
        coverageLimit: 300000,
        startDate: '2024-01-01',
        endDate: '2025-01-01',
        status: 'active',
    },
];

// Mock Cases
export const mockCases = [
    {
        caseId: 'CASE-2025-567890',
        landId: 'LND-2025-001234',
        userId: 'USR-2025-001',
        caseType: 'BOUNDARY_DISPUTE',
        status: 'active',
        caseManager: {
            id: 'CM-0123',
            name: 'ทนายความ สมชาย ใจดี',
            phone: '+66898765432',
            email: 'somsak.law@example.com',
        },
        timeline: {
            caseReceived: '2024-12-15',
            initialConsultation: '2024-12-17',
            evidenceCollectionEnd: '2024-12-27',
            mediationScheduled: '2025-01-10',
            estimatedCompletion: '2025-03-30',
        },
        progressUpdates: [
            {
                date: '2024-12-17',
                update: 'พบปะเจ้าของที่ดิน ประเมินสถานการณ์',
                nextSteps: 'ติดต่อเพื่อนบ้านเพื่อเจรจา',
            },
        ],
    },
];

// Mock Lawyers
export const mockLawyers = [
    {
        lawyerId: 'LAW-0456',
        name: 'ทนายความ สมศักดิ์ มีประสบการณ์',
        licenseNumber: '12345/2555',
        specialization: ['LAND_LAW', 'CIVIL_LITIGATION'],
        yearsOfExperience: 15,
        location: {
            primaryOffice: 'กรุงเทพฯ',
            serviceAreas: ['กรุงเทพฯ', 'นนทบุรี', 'ปทุมธานี'],
        },
        fees: {
            consultation: 3000,
            simpleCase: 50000,
            mediumCase: 150000,
            complexCase: 300000,
        },
        rating: 4.7,
        reviewsCount: 89,
        successRate: 78,
        responseTime: '< 24 hours',
        totalCases: 45,
        casesWon: 35,
    },
    {
        lawyerId: 'LAW-0789',
        name: 'ทนายความ สุภาพร เก่งกาจ',
        licenseNumber: '67890/2558',
        specialization: ['LAND_LAW', 'INHERITANCE_LAW'],
        yearsOfExperience: 10,
        location: {
            primaryOffice: 'นนทบุรี',
            serviceAreas: ['นนทบุรี', 'ปทุมธานี', 'นครปฐม'],
        },
        fees: {
            consultation: 2500,
            simpleCase: 45000,
            mediumCase: 120000,
            complexCase: 250000,
        },
        rating: 4.5,
        reviewsCount: 54,
        successRate: 82,
        responseTime: '< 12 hours',
        totalCases: 32,
        casesWon: 26,
    },
];

// Mock Documents
export const mockDocuments = [
    {
        documentId: 'GEN-DOC-202512-9876',
        templateId: 'DOC-OBJECTION-001',
        landId: 'LND-2025-001234',
        userId: 'USR-2025-001',
        documentType: 'OBJECTION_LETTER',
        title: 'หนังสือโต้แย้งการครอบครองโดยปรปักษ์',
        generatedDate: '2024-12-25',
        status: 'ready',
        pdfUrl: '/documents/objection-letter.pdf',
    },
];
