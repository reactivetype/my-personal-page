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

  describe('Project Filtering', () => {
    it('renders filter buttons for All, Research, and Industry', () => {
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/projects'],
      })

      render(<RouterProvider router={router} />)

      // Check that all filter buttons are present
      expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Research' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Industry' })).toBeInTheDocument()
    })

    it('shows All filter as active by default', () => {
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/projects'],
      })

      render(<RouterProvider router={router} />)

      const allButton = screen.getByRole('button', { name: 'All' })
      expect(allButton).toHaveClass('bg-ocean-blue', 'text-white')
      
      const researchButton = screen.getByRole('button', { name: 'Research' })
      expect(researchButton).toHaveClass('text-gray-600')
      
      const industryButton = screen.getByRole('button', { name: 'Industry' })
      expect(industryButton).toHaveClass('text-gray-600')
    })

    it('displays all projects when All filter is selected', () => {
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/projects'],
      })

      render(<RouterProvider router={router} />)

      // Should show all 6 projects
      const projectCards = screen.getAllByText(/View Details →/i)
      expect(projectCards).toHaveLength(6)
    })

    it('filters projects to show only Research projects when Research filter is clicked', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/projects'],
      })

      render(<RouterProvider router={router} />)

      // Click Research filter
      const researchButton = screen.getByRole('button', { name: 'Research' })
      await user.click(researchButton)

      // Should show only Research projects (3 projects)
      const researchProjects = [
        'Deep Learning Model for Time Series Forecasting',
        'Federated Learning Framework',
        'Multi-modal AI for Medical Imaging',
      ]

      researchProjects.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument()
      })

      // Should not show Industry projects
      const industryProjects = [
        'Computer Vision Pipeline for Manufacturing QC',
        'NLP System for Document Classification',
        'Real-time Anomaly Detection System',
      ]

      industryProjects.forEach(title => {
        expect(screen.queryByText(title)).not.toBeInTheDocument()
      })

      // Should show 3 project cards
      const projectCards = screen.getAllByText(/View Details →/i)
      expect(projectCards).toHaveLength(3)
    })

    it('filters projects to show only Industry projects when Industry filter is clicked', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/projects'],
      })

      render(<RouterProvider router={router} />)

      // Click Industry filter
      const industryButton = screen.getByRole('button', { name: 'Industry' })
      await user.click(industryButton)

      // Should show only Industry projects (3 projects)
      const industryProjects = [
        'Computer Vision Pipeline for Manufacturing QC',
        'NLP System for Document Classification',
        'Real-time Anomaly Detection System',
      ]

      industryProjects.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument()
      })

      // Should not show Research projects
      const researchProjects = [
        'Deep Learning Model for Time Series Forecasting',
        'Federated Learning Framework',
        'Multi-modal AI for Medical Imaging',
      ]

      researchProjects.forEach(title => {
        expect(screen.queryByText(title)).not.toBeInTheDocument()
      })

      // Should show 3 project cards
      const projectCards = screen.getAllByText(/View Details →/i)
      expect(projectCards).toHaveLength(3)
    })

    it('updates active filter styling when different filters are clicked', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/projects'],
      })

      render(<RouterProvider router={router} />)

      const allButton = screen.getByRole('button', { name: 'All' })
      const researchButton = screen.getByRole('button', { name: 'Research' })
      const industryButton = screen.getByRole('button', { name: 'Industry' })

      // Initially All should be active
      expect(allButton).toHaveClass('bg-ocean-blue', 'text-white')
      expect(researchButton).toHaveClass('text-gray-600')
      expect(industryButton).toHaveClass('text-gray-600')

      // Click Research
      await user.click(researchButton)
      expect(researchButton).toHaveClass('bg-ocean-blue', 'text-white')
      expect(allButton).toHaveClass('text-gray-600')
      expect(industryButton).toHaveClass('text-gray-600')

      // Click Industry
      await user.click(industryButton)
      expect(industryButton).toHaveClass('bg-ocean-blue', 'text-white')
      expect(allButton).toHaveClass('text-gray-600')
      expect(researchButton).toHaveClass('text-gray-600')

      // Click All again
      await user.click(allButton)
      expect(allButton).toHaveClass('bg-ocean-blue', 'text-white')
      expect(researchButton).toHaveClass('text-gray-600')
      expect(industryButton).toHaveClass('text-gray-600')
    })

    it('shows all projects again when switching back to All filter', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/projects'],
      })

      render(<RouterProvider router={router} />)

      // Click Research filter first
      const researchButton = screen.getByRole('button', { name: 'Research' })
      await user.click(researchButton)

      // Should show 3 projects
      let projectCards = screen.getAllByText(/View Details →/i)
      expect(projectCards).toHaveLength(3)

      // Click All filter
      const allButton = screen.getByRole('button', { name: 'All' })
      await user.click(allButton)

      // Should show all 6 projects again
      projectCards = screen.getAllByText(/View Details →/i)
      expect(projectCards).toHaveLength(6)
    })
  })
})
