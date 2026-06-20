#!/usr/bin/env python3
"""
This module provides a function to list all documents in a MongoDB collection.
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection.
    Returns an empty list if no document in the collection.
    """
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
