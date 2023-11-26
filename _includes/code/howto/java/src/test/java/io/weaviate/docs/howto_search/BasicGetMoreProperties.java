package io.weaviate.docs.howto_search;

import io.weaviate.client.Config;
import io.weaviate.client.WeaviateAuthClient;
import io.weaviate.client.WeaviateClient;
import io.weaviate.client.base.Result;
import io.weaviate.client.v1.auth.exception.AuthException;
import io.weaviate.client.v1.graphql.model.GraphQLResponse;
import io.weaviate.client.v1.graphql.query.fields.Field;

public class BasicGetMoreProperties {
    public static void main(String[] args) {
        Config config = new Config("https", "edu-demo.weaviate.network");

        try {
            WeaviateClient client = WeaviateAuthClient.apiKey(config, "learn-weaviate");
            Field question = Field.builder().name("question").build();
            Field answer = Field.builder().name("answer").build();
            Field points = Field.builder().name("points").build();

            Result<GraphQLResponse> result = client.graphQL().get()
                    .withClassName("JeopardyQuestion")
                    .withFields(question, answer, points)
                    .withLimit(1)
                    .run();
            System.out.println(result.getResult());
        } catch (AuthException e) {
            throw new RuntimeException(e);
        }
    }
}