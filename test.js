const request = require('supertest');
const app = require('./app');

describe('Express App Tests', () => {
    describe('GET /', () => {
        it('should return welcome message', async () => {
            const response = await request(app)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(200);
            
            expect(response.body).toEqual({
                message: 'Welcome to MCP Test API'
            });
        });
    });

    describe('GET /health', () => {
        it('should return healthy status', async () => {
            const response = await request(app)
                .get('/health')
                .expect('Content-Type', /json/)
                .expect(200);
            
            expect(response.body).toEqual({
                status: 'healthy'
            });
        });
    });

    describe('404 Handler', () => {
        it('should return 404 for unknown routes', async () => {
            await request(app)
                .get('/unknown-route')
                .expect(404);
        });
    });
});