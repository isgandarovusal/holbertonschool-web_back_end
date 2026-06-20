#!/usr/bin/env python3
"""
This module provides a function to return the list of school having a specific
topic.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school having a specific topic.
    """
    return list(mongo_collection.find({"topics": topic}))
