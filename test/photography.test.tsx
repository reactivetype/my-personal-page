import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import Photography from '../app/routes/photography'

const mockRoutes = [
  {
    path: '/photography',
    element: <Photography />,
  },
]

describe('Photography Page', () => {
  describe('Modal UX Improvements', () => {
    it('opens modal when photo is clicked', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Click on the first photo in the grid (Northern Lights)
      const photoCards = screen.getAllByText('🌌')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Modal should be open
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()
      // Check for modal content by looking for the modal backdrop
      expect(screen.getByRole('button', { name: /close modal/i }).closest('[class*="fixed inset-0"]')).toBeInTheDocument()
    })

    it('closes modal when clicking outside the modal content', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Open modal
      const photoCards = screen.getAllByText('🌌')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Modal should be open
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

      // Click on the backdrop (outside modal content)
      const backdrop = screen.getByRole('button', { name: /close modal/i }).closest('[class*="fixed inset-0"]')!
      await user.click(backdrop)

      // Modal should be closed
      expect(screen.queryByRole('button', { name: /close modal/i })).not.toBeInTheDocument()
    })

    it('does not close modal when clicking on modal content', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Open modal
      const photoCards = screen.getAllByText('🌌')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Modal should be open
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

      // Click on the modal content area (find a safe area to click that's not the backdrop)
      const modalTitle = screen.getAllByText('Northern Lights in Iceland').find(el => 
        el.closest('[class*="fixed inset-0"]') !== null
      )!
      await user.click(modalTitle)

      // Modal should still be open
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()
    })

    it('closes modal when Escape key is pressed', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Open modal
      const photoCards = screen.getAllByText('🌌')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Modal should be open
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

      // Press Escape key
      await user.keyboard('{Escape}')

      // Modal should be closed
      expect(screen.queryByRole('button', { name: /close modal/i })).not.toBeInTheDocument()
    })

    it('navigates to next photo with right arrow key', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Open modal with first photo
      const photoCards = screen.getAllByText('🌌')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Should show first photo (check for modal being open)
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

      // Press right arrow key
      await user.keyboard('{ArrowRight}')

      // Should still have modal open but with different content
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()
      // Check that we can find the cherry blossom emoji in the modal
      const modalArea = screen.getByRole('button', { name: /close modal/i }).closest('[class*="fixed inset-0"]')!
      expect(modalArea.textContent).toContain('🌸')
    })

    it('navigates to previous photo with left arrow key', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Open modal with second photo (Cherry Blossoms)
      const photoCards = screen.getAllByText('🌸')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Should show second photo
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

      // Press left arrow key
      await user.keyboard('{ArrowLeft}')

      // Should show first photo
      const modalArea = screen.getByRole('button', { name: /close modal/i }).closest('[class*="fixed inset-0"]')!
      expect(modalArea.textContent).toContain('🌌')
    })

    it('navigates with arrow buttons', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Open modal
      const photoCards = screen.getAllByText('🌌')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Should show first photo
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

      // Click next button
      const nextButton = screen.getByRole('button', { name: /next photo/i })
      await user.click(nextButton)

      // Should show second photo
      const modalArea = screen.getByRole('button', { name: /close modal/i }).closest('[class*="fixed inset-0"]')!
      expect(modalArea.textContent).toContain('🌸')

      // Click previous button
      const prevButton = screen.getByRole('button', { name: /previous photo/i })
      await user.click(prevButton)

      // Should show first photo again
      expect(modalArea.textContent).toContain('🌌')
    })

    it('closes modal with X button', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Open modal
      const photoCards = screen.getAllByText('🌌')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Modal should be open
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

      // Click close button
      const closeButton = screen.getByRole('button', { name: /close modal/i })
      await user.click(closeButton)

      // Modal should be closed
      expect(screen.queryByRole('button', { name: /close modal/i })).not.toBeInTheDocument()
    })

    it('wraps around when navigating past last photo', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Open modal with last photo (Hummingbird)
      const photoCards = screen.getAllByText('🐦')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Should show last photo
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

      // Press right arrow key (should wrap to first photo)
      await user.keyboard('{ArrowRight}')

      // Should show first photo
      const modalArea = screen.getByRole('button', { name: /close modal/i }).closest('[class*="fixed inset-0"]')!
      expect(modalArea.textContent).toContain('🌌')
    })

    it('wraps around when navigating before first photo', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Open modal with first photo
      const photoCards = screen.getAllByText('🌌')
      const gridPhoto = photoCards.find(el => 
        el.closest('[class*="grid-cols"]') !== null
      )
      await user.click(gridPhoto!.closest('div')!)

      // Should show first photo
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

      // Press left arrow key (should wrap to last photo)
      await user.keyboard('{ArrowLeft}')

      // Should show last photo
      const modalArea = screen.getByRole('button', { name: /close modal/i }).closest('[class*="fixed inset-0"]')!
      expect(modalArea.textContent).toContain('🐦')
    })
  })

  describe('Category Filtering', () => {
    it('filters photos by category', async () => {
      const user = userEvent.setup()
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Initially should show all photos (12 total)
      expect(screen.getByText('Cherry Blossoms in Kyoto')).toBeInTheDocument()
      expect(screen.getByText('Dewdrop on Spider Web')).toBeInTheDocument()
      expect(screen.getByText('Patagonian Peaks')).toBeInTheDocument()

      // Click Travel filter
      const travelButton = screen.getByRole('button', { name: /Travel \(4\)/i })
      await user.click(travelButton)

      // Should show only travel photos
      expect(screen.getByText('Cherry Blossoms in Kyoto')).toBeInTheDocument()
      expect(screen.getByText('Moroccan Spice Market')).toBeInTheDocument()
      expect(screen.getByText('Street Art in Buenos Aires')).toBeInTheDocument()
      expect(screen.getByText('Santorini Sunset')).toBeInTheDocument()

      // Should not show landscape photos
      expect(screen.queryByText('Patagonian Peaks')).not.toBeInTheDocument()
      expect(screen.queryByText('Swiss Alpine Lake')).not.toBeInTheDocument()
    })

    it('shows correct photo count in filter buttons', () => {
      const router = createMemoryRouter(mockRoutes, {
        initialEntries: ['/photography'],
      })

      render(<RouterProvider router={router} />)

      // Check filter button counts
      expect(screen.getByRole('button', { name: /All \(12\)/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Travel \(4\)/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Landscape \(4\)/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Close-up \(4\)/i })).toBeInTheDocument()
    })
  })
})
