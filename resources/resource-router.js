/** @format */

const express = require('express');

const Resource = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
	Resource.find()
		.then((resource) => {
			res.json(resource);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get resource' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	Resource.findById(id)
		.then((resource) => {
			if (resource) {
				res.json(resource);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find resource with given id.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get resources', err });
		});
});

router.post('/', (req, res) => {
	const resourceData = req.body;

	Resource.add(resourceData)
		.then((resource) => {
			res.status(201).json(resource);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new resource' });
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Resource.findById(id)
		.then((resource) => {
			if (resource) {
				Resource.update(changes, id).then((updatedResource) => {
					res.json(updatedResource);
				});
			} else {
				res
					.status(404)
					.json({ message: 'Could not find resource with given id' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to update resource' });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Resource.remove(id)
		.then((deleted) => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res
					.status(404)
					.json({ message: 'Could not find resource with given id' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to delete resource' });
		});
});

module.exports = router;
