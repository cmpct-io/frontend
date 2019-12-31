const getReportType = (reportType) => {
  switch (reportType) {
    case 0: return 'Scam'
    case 1: return 'Dead link'
    case 2: return 'Insecure'
    case 3: return 'Phishing'
    default: return 'Unknown'
  }
}

export default {
  getReportType
}
