import { Router } from 'express'
import * as puppiesCtrl from '../controllers/puppies.js'

const router = Router()

router.get('/', puppiesCtrl.index)
router.get('/new', puppiesCtrl.new)
router.get('/:puppyId', puppiesCtrl.show)
router.get('/:puppyId/edit', puppiesCtrl.edit)
router.post('/', puppiesCtrl.create)
router.put('/:puppyId', puppiesCtrl.update)
router.delete('/:puppyId', puppiesCtrl.delete)

export { router }
