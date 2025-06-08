import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import Projects from '../app/routes/projects'

// Mock project detail component for testing navigation
const MockProjectDetail = () => <div>Project Detail Page</div>

const mockRoutes = [
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/projects/:id',
    element: <MockProjectDetail />,
  },
]

describe('Projects Page', () => {
  it('renders project titles as clickable links', () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/projects'],
    })

    render(<RouterProvider router={router} />)

    // Check that project titles are rendered as links
    const projectTitle = screen.getByRole('link', {
      name: /Deep Learning Model for Time Series Forecasting/i,
    })
    expect(projectTitle).toBeInTheDocument()
    expect(projectTitle).toHaveAttribute('href', '/projects/1')
  })

  it('navigates to project detail when title is clicked', async () => {
    const user = userEvent.setup()
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/projects'],
    })

    render(<RouterProvider router={router} />)

    // Click on the first project title
    const projectTitle = screen.getByRole('link', {
      name: /Deep Learning Model for Time Series Forecasting/i,
    })
    
    await user.click(projectTitle)

    // Check that we navigated to the correct URL
    expect(router.state.location.pathname).toBe('/projects/1')
  })

  it('renders all project titles as clickable links', () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/projects'],
    })

    render(<RouterProvider router={router} />)

    // Check that all project titles are clickable
    const expectedTitles = [
      'Deep Learning Model for Time Series Forecasting',
      'Computer Vision Pipeline for Manufacturing QC',
      'NLP System for Document Classification',
      'Federated Learning Framework',
      'Real-time Anomaly Detection System',
      'Multi-modal AI for Medical Imaging',
    ]

    expectedTitles.forEach((title, index) => {
      const link = screen.getByRole('link', { name: new RegExp(title, 'i') })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/projects/${index + 1}`)
    })
  })

  it('maintains View Details links alongside clickable titles', () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/projects'],
    })

    render(<RouterProvider router={router} />)

    // Check that "View Details" links are still present
    const viewDetailsLinks = screen.getAllByText(/View Details →/i)
    expect(viewDetailsLinks).toHaveLength(6) // Should have 6 projects
    
    viewDetailsLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', `/projects/${index + 1}`)
    })
  })

  it('applies hover styles to clickable titles', () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/projects'],
    })

    render(<RouterProvider router={router} />)

    const projectTitle = screen.getByRole('link', {
      name: /Deep Learning Model for Time Series Forecasting/i,
    })
    
    // Check that the title has the correct CSS classes for hover effects
    const titleElement = projectTitle.querySelector('h3')
    expect(titleElement).toHaveClass('hover:text-ocean-blue', 'transition-colors', 'cursor-pointer')
  })
})
