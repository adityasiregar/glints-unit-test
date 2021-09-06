module.exports = {
    testEnvironment: "node",
    coverageDirectory: "coverage",
    testResultsProcessor: "jest-sonar-reporter",
    coverageReporters: [['lcov', { projectRoot: './' }]]
}