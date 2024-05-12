import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# loading the dataset
df = pd.read_csv('dataset/startups.csv')

# Preprocess the data
df['impact'] = df['social_impact'] + ' ' + df['environmental_impact']

# TF-IDF Vectorization
# tfidf_vectorizer = TfidfVectorizer
# print("Training model...")
# tfidf_matrix = tfidf_vectorizer.fit_transform(df['impact'])

# # Compute cosine similarity
# cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

def get_recommendations(investor_prefs, top_n=5):
    # # Filter the dataset based on investor preferences
    # filtered_df = df[(df['risk_tolerance'] == investor_prefs['risk_tolerance']) &
    #                  (df['investment_duration'] == investor_prefs['investment_duration'])]

    # # Compute TF-IDF for the filtered dataset
    # filtered_tfidf_matrix = tfidf_vectorizer.transform(filtered_df['impact'])

    # # Compute cosine similarity with the filtered dataset
    # cosine_sim_filtered = cosine_similarity(filtered_tfidf_matrix, tfidf_matrix)

    # # Get indices of the top recommendations
    # indices = cosine_sim_filtered.argsort()[:, ::-1][:, :top_n]

    # Get startup recommendations
    weights = []

    for (idx, startup) in enumerate(df.values):
        weight = 0
        if startup[1] == investor_prefs["social_impact"] and startup[2] == investor_prefs["environmental_impact"]:
            weight += 30
        else:
            if startup[1] == investor_prefs["social_impact"] or startup[2] == investor_prefs["environmental_impact"]:
                weight += 15
        weight -= 5*abs(startup[4]-investor_prefs["risk_tolerance"])
        weight -= 5*abs(startup[5]-investor_prefs["investment_duration"])
        if weight >= 10:
            weights.append((idx, weight))

    weights = sorted(weights, key=lambda x: x[1])[::-1][:top_n]

    return [weight[0] for weight in weights]
