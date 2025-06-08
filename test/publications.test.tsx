import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import Publications from '../app/routes/publications'

// Mock publication detail component for testing navigation
const MockPublicationDetail = () => <div>Publication Detail Page</div>

const mockRoutes = [
  {
    path: '/publications',
    element: <Publications />,
  },
  {
    path: '/publications/:id',
    element: <MockPublicationDetail />,
  },
]

describe('Publications Page', () => {
  it('renders publication titles as clickable links', () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/publications'],
    })

    render(<RouterProvider router={router} />)

    // Check that publication titles are rendered as links
    const publicationTitle = screen.getByRole('link', {
      name: /Transformer-Based Multi-Variate Time Series Forecasting with Attention Mechanisms/i,
    })
    expect(publicationTitle).toBeInTheDocument()
    expect(publicationTitle).toHaveAttribute('href', '/publications/1')
  })

  it('navigates to publication detail when title is clicked', async () => {
    const user = userEvent.setup()
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/publications'],
    })

    render(<RouterProvider router={router} />)

    // Click on the first publication title
    const publicationTitle = screen.getByRole('link', {
      name: /Transformer-Based Multi-Variate Time Series Forecasting with Attention Mechanisms/i,
    })
    
    await user.click(publicationTitle)

    // Check that we navigated to the correct URL
    expect(router.state.location.pathname).toBe('/publications/1')
  })

  it('renders all publication titles as clickable links', () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/publications'],
    })

    render(<RouterProvider router={router} />)

    // Check that all publication titles are clickable
    const expectedTitles = [
      'Transformer-Based Multi-Variate Time Series Forecasting with Attention Mechanisms',
      'Federated Learning with Differential Privacy for Healthcare Applications',
      'Multi-Modal Deep Learning for Medical Image Analysis',
      'Real-Time Anomaly Detection in IoT Sensor Networks Using Ensemble Methods',
      'Large Language Models for Code Generation: A Comprehensive Evaluation',
    ]

    expectedTitles.forEach((title, index) => {
      const link = screen.getByRole('link', { name: new RegExp(title, 'i') })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/publications/${index + 1}`)
    })
  })

  it('renders patent titles as clickable links when Patents tab is active', async () => {
    const user = userEvent.setup()
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/publications'],
    })

    render(<RouterProvider router={router} />)

    // Click on Patents tab
    const patentsTab = screen.getByRole('button', { name: /Patents \(3\)/i })
    await user.click(patentsTab)

    // Check that patent titles are clickable
    const expectedPatentTitles = [
      'System and Method for Automated Quality Control Using Computer Vision',
      'Privacy-Preserving Machine Learning Training System',
      'Real-Time Anomaly Detection in Streaming Data',
    ]

    expectedPatentTitles.forEach((title, index) => {
      const link = screen.getByRole('link', { name: new RegExp(title, 'i') })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/publications/${index + 1}`)
    })
  })

  it('maintains View Details links alongside clickable titles', () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/publications'],
    })

    render(<RouterProvider router={router} />)

    // Check that "View Details" links are still present
    const viewDetailsLinks = screen.getAllByText(/View Details →/i)
    expect(viewDetailsLinks).toHaveLength(5) // Should have 5 publications
    
    viewDetailsLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', `/publications/${index + 1}`)
    })
  })

  it('applies hover styles to clickable titles', () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/publications'],
    })

    render(<RouterProvider router={router} />)

    const publicationTitle = screen.getByRole('link', {
      name: /Transformer-Based Multi-Variate Time Series Forecasting with Attention Mechanisms/i,
    })
    
    // Check that the title has the correct CSS classes for hover effects
    const titleElement = publicationTitle.querySelector('h3')
    expect(titleElement).toHaveClass('hover:text-ocean-blue', 'transition-colors', 'cursor-pointer')
  })

  it('filters publications based on search term', async () => {
    const user = userEvent.setup()
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ['/publications'],
    })

    render(<RouterProvider router={router} />)

    // Type in search box
    const searchInput = screen.getByPlaceholderText(/Search publications, authors, or keywords.../i)
    await user.type(searchInput, 'Transformer')

    // Check that only matching publications are shown
    expect(screen.getByRole('link', {
      name: /Transformer-Based Multi-Variate Time Series Forecasting with Attention Mechanisms/i,
    })).toBeInTheDocument()

    // Check that non-matching publications are not shown
    expect(screen.queryByRole('link', {
      name: /Multi-Modal Deep Learning for Medical Image Analysis/i,
    })).not.toBeInTheDocument()
  })
})
