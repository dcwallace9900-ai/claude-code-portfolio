// Blog functionality and data
class BlogManager {
    constructor() {
        this.posts = [];
        this.filteredPosts = [];
        this.currentFilter = 'all';
        this.searchQuery = '';
        this.postsPerPage = 6;
        this.currentPage = 1;
        this.isLoading = false;
        
        this.init();
    }

    init() {
        this.initializePosts();
        this.setupEventListeners();
        this.renderPosts();
        this.updatePostCount();
    }

    initializePosts() {
        this.posts = [
            {
                id: 1,
                title: "Building Scalable React Applications with TypeScript",
                excerpt: "Learn how to structure large React applications using TypeScript, including best practices for component architecture, state management, and type safety.",
                content: `
                    <p>Building scalable React applications requires careful planning and the right tools. TypeScript has become an essential part of modern React development, providing type safety and better developer experience.</p>
                    
                    <h2>Why TypeScript with React?</h2>
                    <p>TypeScript brings several advantages to React development:</p>
                    <ul>
                        <li>Compile-time error checking</li>
                        <li>Better IDE support with autocomplete</li>
                        <li>Improved refactoring capabilities</li>
                        <li>Self-documenting code through types</li>
                    </ul>

                    <h2>Setting Up Your Project</h2>
                    <p>Start with Create React App's TypeScript template:</p>
                    <pre><code>npx create-react-app my-app --template typescript</code></pre>

                    <h2>Component Architecture</h2>
                    <p>Structure your components with clear interfaces:</p>
                    <pre><code>interface Props {
  title: string;
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
}

const MyComponent: React.FC<Props> = ({ title, onSubmit, isLoading = false }) => {
  // Component implementation
};</code></pre>

                    <h3>Best Practices</h3>
                    <p>Follow these guidelines for maintainable code:</p>
                    <ol>
                        <li>Use strict TypeScript configuration</li>
                        <li>Define clear prop interfaces</li>
                        <li>Leverage union types for state management</li>
                        <li>Use generic types for reusable components</li>
                    </ol>

                    <blockquote>
                        "The key to scalable React applications is consistent architecture and strong typing. TypeScript helps enforce both."
                    </blockquote>

                    <h2>State Management</h2>
                    <p>For complex applications, consider using Redux Toolkit with TypeScript for predictable state management. The combination provides excellent developer experience and type safety throughout your application.</p>
                `,
                category: "development",
                tags: ["React", "TypeScript", "Web Development", "Frontend"],
                date: "2024-03-15",
                readTime: "8 min read",
                author: "Your Name"
            },
            {
                id: 2,
                title: "The Complete Guide to CSS Grid Layout",
                excerpt: "Master CSS Grid with practical examples and real-world use cases. From basic concepts to advanced layout techniques.",
                content: `
                    <p>CSS Grid Layout is one of the most powerful layout systems available in CSS. It's a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system.</p>
                    
                    <h2>Grid Basics</h2>
                    <p>To get started with CSS Grid, you need to define a grid container:</p>
                    <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
}</code></pre>

                    <h2>Grid Template Areas</h2>
                    <p>One of the most intuitive features of CSS Grid is template areas:</p>
                    <pre><code>.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
}</code></pre>

                    <h3>Responsive Design</h3>
                    <p>CSS Grid makes responsive design elegant and maintainable:</p>
                    <ul>
                        <li>Use auto-fit and auto-fill for responsive columns</li>
                        <li>Combine with minmax() for flexible sizing</li>
                        <li>Media queries can completely restructure layouts</li>
                    </ul>

                    <h2>Advanced Techniques</h2>
                    <p>Grid offers powerful features for complex layouts:</p>
                    <ol>
                        <li>Subgrid for nested layouts</li>
                        <li>Grid auto-placement algorithm</li>
                        <li>Dense packing with grid-auto-flow</li>
                    </ol>

                    <blockquote>
                        "CSS Grid revolutionizes how we think about layout. It's not just a tool, it's a new mental model for web design."
                    </blockquote>

                    <h2>Browser Support</h2>
                    <p>CSS Grid has excellent browser support across all modern browsers. For older browsers, consider using @supports for progressive enhancement.</p>
                `,
                category: "design",
                tags: ["CSS", "Grid", "Layout", "Responsive Design"],
                date: "2024-03-10",
                readTime: "6 min read",
                author: "Your Name"
            },
            {
                id: 3,
                title: "AI Tools Every Developer Should Know in 2024",
                excerpt: "Discover the latest AI-powered tools that can supercharge your development workflow and boost productivity.",
                content: `
                    <p>Artificial Intelligence is transforming how we write code, debug applications, and solve complex problems. Here are the essential AI tools every developer should have in their toolkit in 2024.</p>
                    
                    <h2>Code Generation and Completion</h2>
                    <p>AI-powered code assistants have become indispensable:</p>
                    <ul>
                        <li><strong>GitHub Copilot:</strong> Your AI pair programmer</li>
                        <li><strong>TabNine:</strong> Smart code completion</li>
                        <li><strong>Codeium:</strong> Free alternative with excellent performance</li>
                    </ul>

                    <h2>Debugging and Code Analysis</h2>
                    <p>AI tools can help identify and fix issues faster:</p>
                    <pre><code>// AI can suggest optimizations for code like this:
function inefficientSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}</code></pre>

                    <h3>Documentation and Learning</h3>
                    <p>AI assistants excel at explaining complex concepts:</p>
                    <ol>
                        <li>ChatGPT for architecture discussions</li>
                        <li>Claude for code reviews and explanations</li>
                        <li>Perplexity for research and fact-checking</li>
                    </ol>

                    <h2>Workflow Automation</h2>
                    <p>Automate repetitive tasks with AI:</p>
                    <ul>
                        <li>Generate unit tests automatically</li>
                        <li>Create API documentation from code</li>
                        <li>Optimize database queries</li>
                        <li>Generate commit messages</li>
                    </ul>

                    <blockquote>
                        "AI tools don't replace developers—they amplify our capabilities and free us to focus on creative problem-solving."
                    </blockquote>

                    <h2>Best Practices</h2>
                    <p>To get the most from AI tools:</p>
                    <ol>
                        <li>Always review and test AI-generated code</li>
                        <li>Use AI for learning, not just copying</li>
                        <li>Understand the underlying concepts</li>
                        <li>Keep security and privacy in mind</li>
                    </ol>

                    <h2>The Future</h2>
                    <p>As AI continues to evolve, we can expect even more sophisticated tools that understand context better and provide more accurate suggestions. The key is to embrace these tools while maintaining our critical thinking skills.</p>
                `,
                category: "development",
                tags: ["AI", "Productivity", "Tools", "Development"],
                date: "2024-03-08",
                readTime: "7 min read",
                author: "Your Name"
            },
            {
                id: 4,
                title: "From Junior to Senior: A Developer's Career Journey",
                excerpt: "Navigate your software development career with practical advice on skills, mindset, and opportunities for growth.",
                content: `
                    <p>The journey from junior to senior developer is more than just accumulating years of experience. It's about developing the right skills, mindset, and understanding what truly makes a senior developer valuable to their team and organization.</p>
                    
                    <h2>The Junior Developer Phase</h2>
                    <p>As a junior developer, your primary focus should be:</p>
                    <ul>
                        <li>Learning the fundamentals thoroughly</li>
                        <li>Writing clean, readable code</li>
                        <li>Asking questions and seeking feedback</li>
                        <li>Building projects to apply your knowledge</li>
                    </ul>

                    <h2>Developing Technical Skills</h2>
                    <p>Technical growth happens in stages:</p>
                    <pre><code>// Junior: Basic functionality
function addUser(user) {
  users.push(user);
}

// Mid-level: Error handling and validation
function addUser(user) {
  if (!user || !user.email) {
    throw new Error('Invalid user data');
  }
  
  if (users.find(u => u.email === user.email)) {
    throw new Error('User already exists');
  }
  
  users.push(user);
  return user;
}

// Senior: Architecture and extensibility
class UserService {
  constructor(repository, validator, eventBus) {
    this.repository = repository;
    this.validator = validator;
    this.eventBus = eventBus;
  }
  
  async addUser(userData) {
    const user = await this.validator.validate(userData);
    const savedUser = await this.repository.save(user);
    
    this.eventBus.emit('user.created', savedUser);
    return savedUser;
  }
}</code></pre>

                    <h3>Beyond Coding</h3>
                    <p>Senior developers excel in areas beyond just writing code:</p>
                    <ol>
                        <li><strong>System Design:</strong> Understanding how components interact</li>
                        <li><strong>Mentoring:</strong> Helping junior developers grow</li>
                        <li><strong>Communication:</strong> Explaining technical concepts clearly</li>
                        <li><strong>Business Understanding:</strong> Connecting tech decisions to business value</li>
                    </ol>

                    <h2>The Mid-Level Transition</h2>
                    <p>This is often the most challenging phase:</p>
                    <ul>
                        <li>You're expected to work more independently</li>
                        <li>Code reviews become more critical</li>
                        <li>You start influencing architectural decisions</li>
                        <li>Debugging becomes more complex</li>
                    </ul>

                    <blockquote>
                        "The difference between junior and senior isn't just years of experience—it's the depth of understanding and the ability to see the bigger picture."
                    </blockquote>

                    <h2>Senior Developer Responsibilities</h2>
                    <p>Senior developers are expected to:</p>
                    <ol>
                        <li>Make architectural decisions</li>
                        <li>Mentor and guide team members</li>
                        <li>Lead technical discussions</li>
                        <li>Balance technical debt with feature delivery</li>
                        <li>Communicate with stakeholders</li>
                    </ol>

                    <h2>Continuous Learning</h2>
                    <p>The tech industry never stops evolving. Stay current by:</p>
                    <ul>
                        <li>Reading technical blogs and documentation</li>
                        <li>Contributing to open-source projects</li>
                        <li>Attending conferences and meetups</li>
                        <li>Experimenting with new technologies</li>
                        <li>Building side projects</li>
                    </ul>

                    <h2>Final Thoughts</h2>
                    <p>Remember that career growth isn't just about moving up the ladder. Many successful developers find fulfillment in becoming expert individual contributors, while others move into management or product roles. The key is to continuously grow and find what energizes you most.</p>
                `,
                category: "career",
                tags: ["Career", "Growth", "Leadership", "Skills"],
                date: "2024-03-05",
                readTime: "10 min read",
                author: "Your Name"
            },
            {
                id: 5,
                title: "Building a REST API with Node.js and Express",
                excerpt: "Step-by-step tutorial on creating a robust REST API using Node.js, Express, and MongoDB with authentication and error handling.",
                content: `
                    <p>Building a well-structured REST API is a fundamental skill for backend developers. In this comprehensive tutorial, we'll create a full-featured API using Node.js, Express, and MongoDB.</p>
                    
                    <h2>Project Setup</h2>
                    <p>Start by initializing your project and installing dependencies:</p>
                    <pre><code>npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv cors helmet
npm install -D nodemon jest supertest</code></pre>

                    <h2>Basic Server Setup</h2>
                    <p>Create your main server file:</p>
                    <pre><code>const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});</code></pre>

                    <h3>Database Connection</h3>
                    <p>Set up MongoDB connection with Mongoose:</p>
                    <pre><code>const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

connectDB();</code></pre>

                    <h2>User Model</h2>
                    <p>Define your data models with Mongoose:</p>
                    <pre><code>const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);</code></pre>

                    <h2>Authentication Routes</h2>
                    <p>Implement user registration and login:</p>
                    <pre><code>const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const user = new User({ username, email, password });
    await user.save();
    
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;</code></pre>

                    <h3>Middleware for Authentication</h3>
                    <p>Create middleware to protect routes:</p>
                    <pre><code>const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid token.' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token.' });
  }
};

module.exports = auth;</code></pre>

                    <blockquote>
                        "A well-designed API is like a good contract—it's clear, consistent, and reliable for everyone who uses it."
                    </blockquote>

                    <h2>Best Practices</h2>
                    <p>Follow these guidelines for production-ready APIs:</p>
                    <ol>
                        <li>Always validate input data</li>
                        <li>Use proper HTTP status codes</li>
                        <li>Implement rate limiting</li>
                        <li>Add comprehensive logging</li>
                        <li>Write tests for all endpoints</li>
                        <li>Document your API with tools like Swagger</li>
                    </ol>

                    <h2>Testing Your API</h2>
                    <p>Use Jest and Supertest for comprehensive testing:</p>
                    <pre><code>const request = require('supertest');
const app = require('../app');

describe('Auth Endpoints', () => {
  test('POST /api/auth/register', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      });
      
    expect(response.status).toBe(201);
    expect(response.body.token).toBeDefined();
  });
});</code></pre>

                    <h2>Deployment Considerations</h2>
                    <p>When deploying your API:</p>
                    <ul>
                        <li>Use environment variables for configuration</li>
                        <li>Set up proper logging and monitoring</li>
                        <li>Configure HTTPS and security headers</li>
                        <li>Implement health check endpoints</li>
                        <li>Set up automated backups for your database</li>
                    </ul>
                `,
                category: "tutorials",
                tags: ["Node.js", "Express", "REST API", "MongoDB"],
                date: "2024-03-01",
                readTime: "12 min read",
                author: "Your Name"
            },
            {
                id: 6,
                title: "Modern Frontend Performance Optimization",
                excerpt: "Learn advanced techniques to optimize your web applications for speed, including code splitting, lazy loading, and performance monitoring.",
                content: `
                    <p>Performance optimization is crucial for modern web applications. Users expect fast, responsive experiences, and search engines prioritize fast-loading sites. Let's explore the latest techniques for optimizing frontend performance.</p>
                    
                    <h2>Core Web Vitals</h2>
                    <p>Google's Core Web Vitals are essential metrics to track:</p>
                    <ul>
                        <li><strong>Largest Contentful Paint (LCP):</strong> Loading performance</li>
                        <li><strong>First Input Delay (FID):</strong> Interactivity</li>
                        <li><strong>Cumulative Layout Shift (CLS):</strong> Visual stability</li>
                    </ul>

                    <h2>Code Splitting and Lazy Loading</h2>
                    <p>Break your application into smaller chunks:</p>
                    <pre><code>// React.lazy for component-level code splitting
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Dynamic imports for utility functions
async function loadUtility() {
  const { heavyUtility } = await import('./heavyUtility');
  return heavyUtility();
}</code></pre>

                    <h3>Image Optimization</h3>
                    <p>Images often account for the majority of page weight:</p>
                    <pre><code>// Modern image formats with fallbacks
&lt;picture&gt;
  &lt;source srcset="image.avif" type="image/avif"&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;img src="image.jpg" alt="Description" loading="lazy"&gt;
&lt;/picture&gt;

// Responsive images
&lt;img
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 25vw"
  src="medium.jpg"
  alt="Description"
&gt;</code></pre>

                    <h2>Critical Resource Optimization</h2>
                    <p>Optimize the critical rendering path:</p>
                    <ol>
                        <li>Inline critical CSS to avoid render-blocking</li>
                        <li>Preload important resources</li>
                        <li>Use resource hints for better loading</li>
                        <li>Minimize DOM size and depth</li>
                    </ol>

                    <pre><code>&lt;!-- Resource hints --&gt;
&lt;link rel="preload" href="critical.css" as="style"&gt;
&lt;link rel="preload" href="hero-image.jpg" as="image"&gt;
&lt;link rel="prefetch" href="next-page.js"&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;</code></pre>

                    <h2>JavaScript Performance</h2>
                    <p>Optimize your JavaScript execution:</p>
                    <pre><code>// Debounce expensive operations
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Use Web Workers for heavy computations
const worker = new Worker('worker.js');
worker.postMessage({ data: largeDataSet });
worker.onmessage = (e) => {
  console.log('Result:', e.data);
};</code></pre>

                    <h3>Bundle Optimization</h3>
                    <p>Optimize your build process:</p>
                    <ul>
                        <li>Tree shake unused code</li>
                        <li>Use production builds</li>
                        <li>Enable gzip/brotli compression</li>
                        <li>Analyze bundle size regularly</li>
                    </ul>

                    <blockquote>
                        "Performance is not just about fast loading—it's about creating smooth, responsive experiences that users love."
                    </blockquote>

                    <h2>Caching Strategies</h2>
                    <p>Implement effective caching:</p>
                    <pre><code>// Service Worker for caching
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open('images').then((cache) => {
        return cache.match(event.request).then((response) => {
          return response || fetch(event.request).then((fetchResponse) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
});</code></pre>

                    <h2>Performance Monitoring</h2>
                    <p>Track performance in production:</p>
                    <pre><code>// Performance Observer API
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Performance metric:', entry.name, entry.value);
    
    // Send to analytics
    analytics.track('performance_metric', {
      metric: entry.name,
      value: entry.value,
      url: location.pathname
    });
  }
});

observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });</code></pre>

                    <h2>Advanced Techniques</h2>
                    <p>Cutting-edge optimization strategies:</p>
                    <ol>
                        <li><strong>Streaming SSR:</strong> Send HTML as it's generated</li>
                        <li><strong>Partial Hydration:</strong> Hydrate components on demand</li>
                        <li><strong>Edge Computing:</strong> Move computation closer to users</li>
                        <li><strong>Predictive Prefetching:</strong> Use ML to predict user actions</li>
                    </ol>

                    <h2>Tools and Measurement</h2>
                    <p>Essential tools for performance optimization:</p>
                    <ul>
                        <li>Lighthouse for auditing</li>
                        <li>WebPageTest for detailed analysis</li>
                        <li>Chrome DevTools Performance tab</li>
                        <li>Bundle analyzers for code optimization</li>
                        <li>Real User Monitoring (RUM) tools</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Performance optimization is an ongoing process. Start with measuring your current performance, identify the biggest bottlenecks, and apply optimizations systematically. Remember that perceived performance is often as important as actual performance—users should feel that your application is fast and responsive.</p>
                `,
                category: "development",
                tags: ["Performance", "Optimization", "Frontend", "Web Vitals"],
                date: "2024-02-28",
                readTime: "9 min read",
                author: "Your Name"
            }
        ];

        this.filteredPosts = [...this.posts];
    }

    setupEventListeners() {
        // Category filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleCategoryFilter(e.target.dataset.category);
            });
        });

        // Search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMorePosts();
            });
        }

        // Newsletter form
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                this.handleNewsletterSubmit(e);
            });
        }

        // Modal close events
        const modalOverlay = document.getElementById('modal-overlay');
        const modalClose = document.getElementById('modal-close');
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    this.closeModal();
                }
            });
        }

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Mobile menu (if exists from main portfolio)
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }

    handleCategoryFilter(category) {
        this.currentFilter = category;
        this.currentPage = 1;

        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        this.filterAndSearchPosts();
        this.renderPosts();
    }

    handleSearch(query) {
        this.searchQuery = query.toLowerCase();
        this.currentPage = 1;
        this.filterAndSearchPosts();
        this.renderPosts();
    }

    filterAndSearchPosts() {
        let filtered = this.posts;

        // Apply category filter
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(post => post.category === this.currentFilter);
        }

        // Apply search filter
        if (this.searchQuery) {
            filtered = filtered.filter(post => 
                post.title.toLowerCase().includes(this.searchQuery) ||
                post.excerpt.toLowerCase().includes(this.searchQuery) ||
                post.tags.some(tag => tag.toLowerCase().includes(this.searchQuery))
            );
        }

        this.filteredPosts = filtered;
    }

    renderPosts() {
        const postsGrid = document.getElementById('posts-grid');
        const noResults = document.getElementById('no-results');
        const loadMoreBtn = document.getElementById('load-more-btn');

        if (!postsGrid) return;

        // Show loading animation
        this.showLoading();

        setTimeout(() => {
            const postsToShow = this.filteredPosts.slice(0, this.currentPage * this.postsPerPage);
            
            if (postsToShow.length === 0) {
                postsGrid.innerHTML = '';
                noResults.style.display = 'block';
                loadMoreBtn.style.display = 'none';
            } else {
                noResults.style.display = 'none';
                postsGrid.innerHTML = postsToShow.map(post => this.createPostCard(post)).join('');
                
                // Show/hide load more button
                const hasMorePosts = this.filteredPosts.length > this.currentPage * this.postsPerPage;
                loadMoreBtn.style.display = hasMorePosts ? 'block' : 'none';
                
                // Add click events to post cards
                this.addPostCardListeners();
            }

            this.hideLoading();
        }, 300); // Simulate loading time for smooth UX
    }

    createPostCard(post) {
        const categoryIcons = {
            development: 'fas fa-code',
            design: 'fas fa-palette',
            career: 'fas fa-chart-line',
            tutorials: 'fas fa-graduation-cap'
        };

        return `
            <article class="post-card" data-post-id="${post.id}">
                <div class="post-image">
                    <div class="post-image-placeholder">
                        <i class="${categoryIcons[post.category] || 'fas fa-file-alt'}"></i>
                    </div>
                    <span class="post-category">${post.category}</span>
                </div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-date">
                            <i class="fas fa-calendar"></i>
                            ${this.formatDate(post.date)}
                        </span>
                        <span class="post-read-time">
                            <i class="fas fa-clock"></i>
                            ${post.readTime}
                        </span>
                    </div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="read-more">
                        Read Full Article
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>
        `;
    }

    addPostCardListeners() {
        document.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = parseInt(card.dataset.postId);
                this.openModal(postId);
            });
        });
    }

    openModal(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        const modal = document.getElementById('post-modal');
        const modalOverlay = document.getElementById('modal-overlay');
        
        // Populate modal content
        document.getElementById('modal-category').textContent = post.category;
        document.getElementById('modal-date').textContent = this.formatDate(post.date);
        document.getElementById('modal-read-time').textContent = post.readTime;
        document.getElementById('modal-title').textContent = post.title;
        document.getElementById('modal-body').innerHTML = post.content;

        // Show modal with animation
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Track analytics (if implemented)
        if (window.gtag) {
            gtag('event', 'blog_post_view', {
                post_title: post.title,
                post_category: post.category
            });
        }
    }

    closeModal() {
        const modalOverlay = document.getElementById('modal-overlay');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    loadMorePosts() {
        this.currentPage++;
        this.renderPosts();
    }

    handleNewsletterSubmit(e) {
        e.preventDefault();
        
        const email = document.getElementById('newsletter-email').value;
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Simulate subscription process
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert(`Thank you for subscribing with ${email}! You'll receive our latest articles.`);
            document.getElementById('newsletter-email').value = '';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Track analytics
            if (window.gtag) {
                gtag('event', 'newsletter_signup', {
                    email: email
                });
            }
        }, 2000);
    }

    updatePostCount() {
        const postCountElement = document.getElementById('post-count');
        if (postCountElement) {
            postCountElement.textContent = `${this.posts.length}+`;
        }
    }

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    showLoading() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.style.display = 'flex';
        }
    }

    hideLoading() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.style.display = 'none';
        }
    }
}

// Social sharing functions
function shareOnTwitter() {
    const title = document.getElementById('modal-title').textContent;
    const url = window.location.href;
    const text = `Check out this article: ${title}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnLinkedIn() {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnFacebook() {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const copyBtn = document.querySelector('.share-btn.copy');
        const originalIcon = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        copyBtn.style.background = '#10b981';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalIcon;
            copyBtn.style.background = '#6b7280';
        }, 2000);
    });
}

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BlogManager();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-to-top functionality
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show scroll-to-top button on scroll
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
});